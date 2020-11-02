import { produce } from 'immer';

import {
  DRAFT_PROJECT_STATUS,
  ACTIVE_PROJECT_STATUS,
  DELETE_PROJECT_STATUS,
  PAUSE_PROJECT_STATUS,
} from '../../lib/types';
import * as types from '../actionTypes';

export const INITIAL_STATE = {
  nextUserId: 1,
  mobileMenuOpen: false,
  isDebuggerMode: true,
  authenticated: false,
  authorized: false,
  asyncCallInProgress: false,
  filtersQuery: {},
  filteredPublicProjects: [],
  publicProjects: [],
  user: {
    email: 'testuserdemo@hotmail.com',
    userEmail: 'testuserdemo@hotmail.com',
    id: 1,
    isActive: false,
    isGoogle: false,
    type: 1,
    alternativeEmail: '',
    availableHire: false,
    image: '',
    personalInfo: {
      name: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      position: {
        id: '',
        name: '',
      },
      positionName: '',
      positionId: '',
      years: '',
      businessName: '',
      industryName: '',
      industryId: '',
    },
    workInformation: {
      workInformation: [],
    },
    experienceInfo: {
      generalHourRate: '',
    },
    linkedInProfile: {
      headline: '',
      resumeDocument: '',
      //works: [],
      //educations: [],
    },
    taxInfo: {
      freelanceId: '',
      businessId: 2,
      otherBusiness: '',
      legalName: '',
      businessName: '',
      address: '',
      excemptionId: '',
      exemptionCode: '',
      apt: '',
      zipCode: '',
      stateId: '',
      city: '',
      SSNorEIN: '',
      accountNumbers: '',
      signature: '',
    },
  },
  draftProject: {
    name: '',
    isPrivate: false,
    isCertificationAAPL: false,
    state: 'FL',
    basin: 1,
    county: 1,
    aditionalDescription: '',
    businessName: '',
    isHourlyRatePrivate: false,
    isHourlyRate: true,
    hourlyRateType: 0,
    fixedRate: '',
    maxHourlyRate: '',
    requireMilestones: false,
    minRate: '',
    maxRate: '',
    hoursperWeek: 0,
    estimation: 0,
    time: 0,
    status: 1,
    workProviderId: 57,
    editMode: false,
    skills: [],
    otherSkills: [],
    certifications: [],
  },
  draft: [
    // {
    //   estimation: '10',
    //   isHourlyRate: false,
    //   fixedRate: '5000',
    //   industry: { id: 1, name: 'Oil & gas' },
    //   isHourlyRatePrivate: false,
    //   isPrivate: true,
    //   name: 'Test Project for sprint delivery #2',
    //   requireMilestones: false,
    //   time: 2,
    //   isCertificationAAPL: 'true',
    //   certifications: [{ certification: { id: 1, name: 'RL' } }],
    //   businessName: 'Sapiens',
    //   skills: [{ skill: { id: 1, name: 'Right of ways' } }],
    // },
  ],
  activeProjects: [],
  preSelectedProject: {},
  applySuccess: false,
  isFetchedOnServer: false,
  error: null,
  allFreelancers: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  return produce(state, (draft) => {
    switch (type) {
      case types.OPEN_MOBILE_MENU:
        draft.mobileMenuOpen = !state.mobileMenuOpen;
        break;

      case types.LOGOUT:
        draft.authenticated = false;
        draft.authorized = false;
        break;

      case types.START_ASYNC_CALL:
        draft.asyncCallInProgress = true;
        break;

      case types.STOP_ASYNC_CALL:
        draft.asyncCallInProgress = false;
        break;

      case types._SUCCESS:
        // const normalizedUser = normalize({ ...payload.response.user }, user)
        if (payload.response.success) {
          draft.user = { ...draft.user, ...payload.response.user };
          draft.authenticated = true;
          draft.asyncCallInProgress = false;
          draft.error = null;
        }
        break;

      case types.FETCH_USER:
        draft.user = payload.user;
        break;

      case types.FETCH_USER_FAILURE:
        // draft.error = notificationErrorHandler(
        //   payload.status,
        //   payload.response,
        // );
        draft.asyncCallInProgress = false;
        break;

      case types.CREATE_USER_PROFILE_SUCCESS:
        // TODO: Resolve this
        // draft.user = payload.response.user
        draft.authorized = payload.response.success && true;
        draft.user = { ...draft.user, ...payload.response.profile };
        // NotificationManager.success(
        //   'Profile created succesfully.',
        //   'Success!',
        //   1500,
        // );
        draft.asyncCallInProgress = false;
        break;

      case types.CREATE_USER_PROFILE_FAILURE:
        // draft.error = notificationErrorHandler(
        //   payload.status,
        //   payload.response,
        // );
        draft.asyncCallInProgress = false;
        break;

      case types.SIGN_UP:
        const signedUser = { ...payload };
        draft.user = signedUser;
        break;

      case types.UNSAVED_PROJECT:
        const unsavedProject = { ...payload };
        draft.draftProject = unsavedProject;
        break;

      case types.DRAFT_PROJECT:
        const newDraftProject = { ...payload };
        draft.draft = [...draft.draft, newDraftProject];
        break;

      case types.REMOVE_DRAFT_PROJECT:
        const position = payload.position;
        const newDraft = [...draft.draft];
        newDraft.splice(position, 1);
        draft.draft = newDraft;
        break;

      case types.UPDATE_EMAILS_SUCCESS:
        if (payload.response.success) {
          draft.user.userEmail = payload.response.profile.userEmail;
          draft.user.email = payload.response.profile.userEmail;
          draft.user.alternativeEmail =
            payload.response.profile.alternativeEmail;
          // NotificationManager.success(
          //   'Emails updated succesfully.',
          //   'Success!',
          //   1500,
          // );
        }
        console.log('RESPONSE FROM EMAILS:', payload.response);
        break;

      case types.UPDATE_EMAILS_FAILURE:
        // draft.error = notificationErrorHandler(
        //   payload.status,
        //   payload.response,
        // );
        console.log('RESPONSE ERROR FROM EMAILS:', payload.error);
        break;

      case types.CHANGE_USER_ROLE:
        const draftUserState = payload;
        draft.user.type = draftUserState;
        break;

      case types.UPDATE_WORK_INFORMATION:
        const draftUserUserWorkInformation = payload;

        draft.user.workInformation = { workInformation: [] };
        draft.user.workInformation.workInformation = draft.user.workInformation.workInformation.concat(
          draftUserUserWorkInformation.workInformation[0],
        );
        break;

      case types.FETCH_FREELANCERS_SUCCESS:
        draft.allFreelancers = payload.response.profile;
        draft.asyncCallInProgress = false;
        break;

      case types.FETCH_FREELANCERS_FAILURE:
        // draft.error = notificationErrorHandler(
        //   payload.status,
        //   payload.response,
        // );
        draft.asyncCallInProgress = false;
        break;

      case types.MAKE_FREELANCER_FAVORITE:
        console.log('WORK PROVIDER ID', draft.user.id);
        console.log('FREELANCER ID', payload);
        // TODO: Implment an endpoint to favorite a freelance by id and by WP id
        break;

      case types.UPDATE_IMAGE:
        draft.user.image = payload.url;
        break;

      case types.CREATE_PROJECT_SUCCESS:
        console.log('STATE REDUCER: ', state);
        console.log('INITIAL STATE:', INITIAL_STATE);
        const status = payload.response.projectResponse.status;
        if (status == 1) {
          // NotificationManager.success(
          //   'Project drafted succesfully.',
          //   'Success!',
          //   1500,
          // );
          draft.draftProject.drafted = true;
        } else {
          // NotificationManager.success(
          //   'Project created succesfully.',
          //   'Success!',
          //   1500,
          // );
          draft.draftProject.posted = true;
        }
        draft.asyncCallInProgress = false;
        break;

      case types.CREATE_PROJECT_FAILURE:
        // draft.error = notificationErrorHandler(
        //   payload.status,
        //   payload.response,
        // );
        draft.asyncCallInProgress = false;
        break;

      case types.RESET_PROJECT:
        draft.draftProject = { ...INITIAL_STATE.draftProject };
        break;

      case types.FETCH_PROJECTS_BY_STATUS_SUCCESS:
        if (
          payload.response.projectResponse &&
          payload.response.projectResponse.length
        ) {
          const STATUS = payload.response.projectResponse[0].status;
          if (STATUS == ACTIVE_PROJECT_STATUS) {
            draft.activeProjects = [...payload.response.projectResponse];
          }
          if (STATUS == DRAFT_PROJECT_STATUS) {
            draft.draft = [...payload.response.projectResponse];
          }
        }
        draft.error = '';
        //draft.asyncCallInProgress = false
        break;

      case types.FETCH_PROJECTS_BY_STATUS_FAILURE:
        // draft.error = notificationErrorHandler(
        //   payload.status,
        //   payload.response,
        // );
        draft.asyncCallInProgress = false;
        break;

      case types.UPDATE_PROJECT_STATUS_SUCCESS:
        const changedPosition = payload.actionPayload.data.position;
        const CHANGED_STATUS = Number(payload.actionPayload.data.status);
        const OLD_STATUS = Number(payload.actionPayload.data.oldStatus);

        if (CHANGED_STATUS == DELETE_PROJECT_STATUS) {
          if (OLD_STATUS == DRAFT_PROJECT_STATUS) {
            const newDraft = [...draft.draft];
            newDraft.splice(changedPosition, 1);
            draft.draft = newDraft;
          }
          if (OLD_STATUS == ACTIVE_PROJECT_STATUS) {
            const newActiveDraft = [...draft.activeProjects];
            newActiveDraft.splice(changedPosition, 1);
            draft.activeProjects = newActiveDraft;
          }
        }

        if (CHANGED_STATUS == PAUSE_PROJECT_STATUS) {
          let newActiveCollection = [...draft.activeProjects];
          newActiveCollection[changedPosition].status = PAUSE_PROJECT_STATUS;
          draft.activeProjects = newActiveCollection;
        }
        break;

      case types.UPDATE_PROJECT_STATUS_FAILURE:
        // draft.error = notificationErrorHandler(
        //   payload.status,
        //   payload.response,
        // );
        draft.asyncCallInProgress = false;
        break;

      case types.FETCH_PUBLIC_PROJECTS_SUCCESS:
        // draft.error = notificationErrorHandler(
        //   payload.status,
        //   payload.response,
        // );
        draft.publicProjects = payload.response.projectResponse;
        draft.asyncCallInProgress = false;
        break;

      case types.FETCH_PUBLIC_PROJECTS_FAILURE:
        // draft.error = notificationErrorHandler(
        //   payload.status,
        //   payload.response,
        // );
        draft.asyncCallInProgress = false;
        break;

      case types.SET_FILTERS:
        draft.filtersQuery = payload.filters;

        let filteredArray = [];
        Object.keys(payload.filters).forEach((filter) => {
          return draft.publicProjects.forEach((item) => {
            if (item[filter] === +payload.filters[filter]) {
              filteredArray.push(item);
            }
          });
        });

        draft.filteredPublicProjects = filteredArray;
        break;

      case types.SELECT_PROJECT_TO_INVITE:
        draft.preSelectedProject = { ...payload.projectData };
        break;

      case types.RESET_PRE_SELECTED_PROJECT:
        draft.preSelectedProject = { ...INITIAL_STATE.preSelectedProject };
        break;

      case types.APPLY_PROJECT_SUCCESS:
        console.log(payload.response);
        NotificationManager.success('Invited succesfully.', 'Success!', 1500);
        draft.applySuccess = true;
        //draft.asyncCallInProgress = false
        break;

      case types.APPLY_PROJECT_FAILURE:
        // draft.error = notificationErrorHandler(
        //   payload.status,
        //   payload.response,
        // );
        draft.asyncCallInProgress = false;
        draft.applySuccess = false;
        break;

      case types.RESET_APPLIED:
        draft.applySuccess = false;
        break;

      case types.FETCH_APPLICATIONS_SUCCESS:
        console.log(payload.response);
        break;

      case types.FETCH_APPLICATIONS_FAILURE:
        break;

      case types.AUTH_BY_TYPE_FAILURE:
        draft.asyncCallInProgress = false;
        break;

      case types.AUTH_BY_TYPE_SUCCESS:
        draft.user = {
          ...payload.actionPayload.response.token.user,
          ...payload.response.profile,
        };
        draft.authenticated = true;
        draft.asyncCallInProgress = false;
        draft.error = null;
        break;
    }
  });
}
