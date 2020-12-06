import { request } from 'universal-rxjs-ajax';

import { API_URL as ENV_API } from '../../env.json';
import { FREELANCER } from '../lib/types';

const API_URL_CREATE_USERS = `${ENV_API}/CreateUsers`;
const API_UPDATE_EMAILS_FL = `${ENV_API}/UpdateEmailFreelance`;
const API_UPDATE_EMAILS_WP = `${ENV_API}/UpdateEmailWorkProvider`;
const API_URL_FREELANCER = `${ENV_API}/CreateFreelance`;
const API_URL_WORKPROVIDER = `${ENV_API}/CreateWorkProvider`;
const API_GET_FREELANCERS = `${ENV_API}/FindAvailableFreelance`;
const API_CREATE_PROJECT = `${ENV_API}/CreateProject`;
const API_FETCH_PROJECTS_BY_STATUS = `${ENV_API}/GetProjectsbyStatus`;
const API_UPDATE_PROJECT_STATUS = `${ENV_API}/UpdateProjectStatus`;
const API_GET_PUBLIC_PROJECTS =
  /*`${process.env.NEXT_PUBLIC_ENV_API}/GetAllProjects`*/ 'https://dev-api-projects-energyfreelance.azurewebsites.net/api/GetAllProjects';
const API_APPLY_PROJECT = `${ENV_API}/ApplyProject`;
const API_GET_APPLICATIONS = `${ENV_API}/GetApplicationOffers`;
const API_AUTH_USER =
  'https://dev-api-security-energyfreelance.azurewebsites.net/api/authenticate?code=hd62IxKMciS8yk7eIUxTUsQRilXiRg3KdaxajLqCj4U/4ROddNUR/A==';
const API_AUTH_FREELANCER =
  'https://dev-api-freelancer-energyfreelance.azurewebsites.net/api/FindFreelancebyId?code=ltsR0y6kFpzo7oP4llTGOWW/EimVfpmcQ1d0nYVWV2RX9z3l0MnLgA==';
const API_AUTH_WORKPROVIDER =
  'https://dev-api-workprovider-energyfreelance.azurewebsites.net/api/FindWPbyId?code=1M6zk4BX/KlXWVcQtIYHaaAknH3V5lgJBl0QFGbU7HwHbxKvI7CyWA==';

export const authUser = (action) => {
  const { data } = action.payload;
  const url = API_AUTH_USER;

  return request({
    url,
    method: 'POST',
    responseType: 'json',
    body: JSON.stringify({
      ...data,
    }),
  });
};

export function authUserByType(action) {
  const { response } = action.payload;
  const { user } = response.token;
  const { id, type } = user;

  let url =
    (type === FREELANCER ? API_AUTH_FREELANCER : API_AUTH_WORKPROVIDER) +
    `&UserId=${id}`;

  return request({
    url,
    method: 'GET',
    responseType: 'json',
  });
}

export function createUser(action: any) {
  const { type } = action.payload;
  const url = API_URL_CREATE_USERS;

  return request({
    url,
    method: 'POST',
    responseType: 'json',
    body: JSON.stringify({
      ...action.payload,
      status: '0',
      isgoogle: 'False',
    }),
  });
}

export function createProfile(action) {
  const { data, type } = action.payload;
  const url = type === FREELANCER ? API_URL_FREELANCER : API_URL_WORKPROVIDER;
  return request({
    url,
    method: 'POST',
    responseType: 'json',
    body: JSON.stringify({
      ...data,
    }),
  });
}

export function updateEmails(action) {
  const { data, type } = action.payload;
  const url = type === FREELANCER ? API_UPDATE_EMAILS_FL : API_UPDATE_EMAILS_WP;

  return request({
    url,
    method: 'POST',
    responseType: 'json',
    body: JSON.stringify({
      ...data,
    }),
  });
}

export function getFreelancers(action) {
  const url = API_GET_FREELANCERS;

  return request({
    url,
    method: 'GET',
    responseType: 'json',
  });
}

export function createProject(action) {
  const { data } = action.payload;
  const url = API_CREATE_PROJECT;

  return request({
    url,
    method: 'POST',
    responseType: 'json',
    body: JSON.stringify({
      ...data,
    }),
  });
}

export function getProjectsByStatus(action) {
  const { data } = action.payload;
  const { workProviderId, status } = data;
  const url = API_FETCH_PROJECTS_BY_STATUS + `/${workProviderId}/${status}`;

  return request({
    url,
    method: 'GET',
    responseType: 'json',
  });
}

export function updateProjectStatus(action) {
  const { data } = action.payload;
  const { projectId, status } = data;

  const url = API_UPDATE_PROJECT_STATUS;

  return request({
    url,
    method: 'PUT',
    responseType: 'json',
    body: JSON.stringify({
      status,
      projectId,
    }),
  });
}

export function getPublicProjects() {
  const url = API_GET_PUBLIC_PROJECTS;

  return request({
    url,
    method: 'GET',
    responseType: 'json',
  });
}

export function applyToProject(action) {
  const { projectApplyData } = action.payload;

  const url = API_APPLY_PROJECT;

  console.log(
    'REQUEST APPLY PROJECT STATUS:',
    JSON.stringify(projectApplyData),
  );

  return request({
    url,
    method: 'POST',
    responseType: 'json',
    body: JSON.stringify({
      ...projectApplyData,
    }),
  });
}

export function getApplications(action) {
  const { freelancerId } = action.payload;

  const url = API_GET_APPLICATIONS + `/${freelancerId}`;

  return request({
    url,
    method: 'GET',
    responseType: 'json',
  });
}
