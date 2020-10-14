import * as types from './actionTypes'

// DEBUGGING ACTIONS IN DEVELOPMENT
export const changeUserRole = (data) => ({
  type: types.CHANGE_USER_ROLE,
  payload: data,
})

export const openMobileMenu = () => ({
  type: types.OPEN_MOBILE_MENU,
})

export const logout = () => ({
  type: types.LOGOUT,
})

// ACTIONS FOR FETCHING USERS
export const startAsyncCall = () => ({
  type: types.START_ASYNC_CALL,
})

export const stopAsyncCall = () => ({
  type: types.STOP_ASYNC_CALL,
})

export const fetchUser = (data) => ({
  type: types.FETCH_USER,
  payload: { ...data },
})

export const fetchUserSuccess = (response) => ({
  type: types._SUCCESS,
  payload: { response },
})

export const fetchUserFailure = (status, response) => ({
  type: types.FETCH_USER_FAILURE,
  payload: { status, response },
})

export const createUserProfile = (data, type) => ({
  type: types.CREATE_USER_PROFILE,
  payload: { data, type },
})

export const createUserProfileSuccess = (response) => ({
  type: types.CREATE_USER_PROFILE_SUCCESS,
  payload: { response },
})

export const createUserProfileFailure = (status, response) => ({
  type: types.CREATE_USER_PROFILE_FAILURE,
  payload: { status, response },
})

export const signUp = (data) => ({
  type: types.SIGN_UP,
  payload: { ...data },
})

export const newUnsavedProject = (projectData, editMode = false) => ({
  type: types.UNSAVED_PROJECT,
  payload: { ...projectData, editMode },
})

// export const newDraftProject = (data) => ({
//   type: types.DRAFT_PROJECT,
//   payload: { ...data },
// })

export const newDraftProject = (data) => ({
  type: types.CREATE_PROJECT,
  payload: { data },
})

export const removeDraftProject = (position) => ({
  type: types.REMOVE_DRAFT_PROJECT,
  payload: { position },
})

export const updateEmails = (data, type) => ({
  type: types.UPDATE_EMAILS,
  payload: { data, type },
})

export const updateEmailsSuccess = (response) => ({
  type: types.UPDATE_EMAILS_SUCCESS,
  payload: { response },
})

export const updateEmailsFailure = (status, response) => ({
  type: types.UPDATE_EMAILS_FAILURE,
  payload: { status, response },
})

export const updateWorkinformation = (workInformation) => ({
  type: types.UPDATE_WORK_INFORMATION,
  payload: { ...workInformation },
})

export const fetchFreelancers = () => ({
  type: types.FETCH_FREELANCERS,
})

export const fetchFreelancersSuccess = (response) => ({
  type: types.FETCH_FREELANCERS_SUCCESS,
  payload: { response },
})

export const fetchFreelancersFailure = (status, response) => ({
  type: types.FETCH_FREELANCERS_FAILURE,
  payload: { status, response },
})

export const makeFreelancerFavorite = (id) => ({
  type: types.MAKE_FREELANCER_FAVORITE,
  payload: { id },
})

export const updateImage = (url) => ({
  type: types.UPDATE_IMAGE,
  payload: { url },
})

export const createProject = (data) => ({
  type: types.CREATE_PROJECT,
  payload: { data },
})

export const createProjectSuccess = (response) => ({
  type: types.CREATE_PROJECT_SUCCESS,
  payload: { response },
})

export const createProjectFailure = (status, response) => ({
  type: types.CREATE_PROJECT_FAILURE,
  payload: { status, response },
})

export const resetProject = () => ({
  type: types.RESET_PROJECT,
})

export const fetchProjectsByStatus = (data) => ({
  type: types.FETCH_PROJECTS_BY_STATUS,
  payload: { data },
})

export const fetchProjectsByStatusSuccess = (response) => ({
  type: types.FETCH_PROJECTS_BY_STATUS_SUCCESS,
  payload: { response },
})

export const fetchProjectsByStatusFailure = (status, response) => ({
  type: types.FETCH_PROJECTS_BY_STATUS_FAILURE,
  payload: { status, response },
})

export const updateProjectStatus = (data) => ({
  type: types.UPDATE_PROJECT_STATUS,
  payload: { data },
})

export const updateProjectStatusSuccess = (response, actionPayload) => ({
  type: types.UPDATE_PROJECT_STATUS_SUCCESS,
  payload: { response, actionPayload },
})

export const updateProjectStatusFailure = (status, response) => ({
  type: types.UPDATE_PROJECT_STATUS_FAILURE,
  payload: { status, response },
})

export const fetchPublicProjects = (data) => ({
  type: types.FETCH_PUBLIC_PROJECTS,
  payload: { ...data },
})

export const fetchPublicProjectsSuccess = (response, actionPayload) => ({
  type: types.FETCH_PUBLIC_PROJECTS_SUCCESS,
  payload: { response, actionPayload },
})

export const fetchPublicProjectsFailure = (response, actionPayload) => ({
  type: types.FETCH_PUBLIC_PROJECTS_FAILURE,
  payload: { response, actionPayload },
})

export const setFiltersForProject = (filters) => ({
  type: types.SET_FILTERS,
  payload: { filters },
})

export const selectProjectToInvite = (projectData) => ({
  type: types.SELECT_PROJECT_TO_INVITE,
  payload: { projectData },
})

export const resetPreSelectedProject = () => ({
  type: types.RESET_PRE_SELECTED_PROJECT,
})

export const applyProject = (projectApplyData) => ({
  type: types.APPLY_PROJECT,
  payload: { projectApplyData },
})

export const applyProjectSuccess = (response) => ({
  type: types.APPLY_PROJECT_SUCCESS,
  payload: { response },
})

export const applyProjectFailure = (status, response) => ({
  type: types.APPLY_PROJECT_FAILURE,
  payload: { status, response },
})

export const resetApplied = () => ({
  type: types.RESET_APPLIED,
})

export const fetchApplications = (freelancerId) => ({
  type: types.FETCH_APPLICATIONS,
  payload: { freelancerId },
})

export const fetchApplicationsSuccess = (response) => ({
  type: types.FETCH_APPLICATIONS_SUCCESS,
  payload: { response },
})

export const fetchApplicationsFailure = (status, response) => ({
  type: types.FETCH_APPLICATIONS_FAILURE,
  payload: { status, response },
})
