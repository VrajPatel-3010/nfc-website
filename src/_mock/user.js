import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import service from "../services/service";
import { useState } from 'react';

// ----------------------------------------------------------------------
const users = []

const user = () => {

  service.getAll()
    .then(resp => {
      console.log(resp.data)
      users.push({
        id: resp.data.id,
        avatarUrl: `/static/mock-images/avatars/avatar_${1 + 1}.jpg`,
        name: resp.data.email,
        company: faker.company.companyName(),
        isVerified: faker.datatype.boolean(),
        status: sample(['active', 'banned']),
        role: sample([
          'Leader',
          'Hr Manager',
          'UI Designer',
          'UX Designer',
          'UI/UX Designer',
          'Project Manager',
          'Backend Developer',
          'Full Stack Designer',
          'Front End Developer',
          'Full Stack Developer',
        ]),
      })
    })
}
user();

export default users;
