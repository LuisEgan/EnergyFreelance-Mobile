import { of, from } from 'rxjs'
import { concatMap, mergeMap, switchMap, catchError, map } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'

import {
  createUser,
  createProfile,
  updateEmails,
  getFreelancers,
  createProject,
  getProjectsByStatus,
  updateProjectStatus,
  getPublicProjects,
  applyToProject,
  getApplications,
} from '../../services'
import * as actions from '../actions'
import * as types from '../actionTypes'

export const fetchUserEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.FETCH_USER),
    switchMap((action) =>
      from(createUser(action)).pipe(
        switchMap((response) => [
          response.response.success
            ? actions.fetchUserSuccess(response.response, action.payload)
            : actions.fetchUserFailure(
                response.status,
                response.response,
                action.payload
              ),
        ]),
        catchError((error) =>
          of(
            actions.fetchUserFailure(
              error.status,
              error.response,
              action.payload
            )
          )
        )
      )
    )
  )
}

export const createUserProfileEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.CREATE_USER_PROFILE),
    mergeMap((action) =>
      createProfile(action).pipe(
        map((response) =>
          response.response.success
            ? actions.createUserProfileSuccess(
                response.response,
                action.payload
              )
            : actions.createUserProfileFailure(
                response.status,
                response.response,
                action.payload
              )
        ),
        catchError((error) =>
          of(
            actions.createUserProfileFailure(
              error.status,
              error.response,
              action.payload
            )
          )
        )
      )
    )
  )
}

export const updateUserEmailsEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.UPDATE_EMAILS),
    mergeMap((action) =>
      updateEmails(action).pipe(
        map((response) =>
          response.response.success
            ? actions.updateEmailsSuccess(response.response, action.payload)
            : actions.updateEmailsFailure(
                response.status,
                response.response,
                action.payload
              )
        ),
        catchError((error) =>
          of(
            actions.updateEmailsFailure(
              error.status,
              error.response,
              action.payload
            )
          )
        )
      )
    )
  )
}

export const fetchFreelancersEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.FETCH_FREELANCERS),
    switchMap((action) =>
      from(getFreelancers(action)).pipe(
        switchMap((response) => [
          response.response.success
            ? actions.fetchFreelancersSuccess(response.response, action.payload)
            : actions.fetchFreelancersFailure(
                response.status,
                response.response,
                action.payload
              ),
        ]),
        catchError((error) =>
          of(
            actions.fetchFreelancersFailure(
              error.status,
              error.response,
              action.payload
            )
          )
        )
      )
    )
  )
}

export const createProjectEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.CREATE_PROJECT),
    mergeMap((action) =>
      createProject(action).pipe(
        map((response) =>
          response.response.success
            ? actions.createProjectSuccess(response.response, action.payload)
            : actions.createProjectFailure(
                response.status,
                response.response,
                action.payload
              )
        ),
        catchError((error) =>
          of(
            actions.createProjectFailure(
              error.status,
              error.response,
              action.payload
            )
          )
        )
      )
    )
  )
}

export const fetchProjectsByStatusEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.FETCH_PROJECTS_BY_STATUS),
    mergeMap((action) =>
      getProjectsByStatus(action).pipe(
        map((response) =>
          response.response.success
            ? actions.fetchProjectsByStatusSuccess(
                response.response,
                action.payload
              )
            : actions.fetchProjectsByStatusFailure(
                response.status,
                response.response,
                action.payload
              )
        ),
        catchError((error) =>
          of(
            actions.fetchProjectsByStatusFailure(
              error.status,
              error.response,
              action.payload
            )
          )
        )
      )
    )
  )
}

export const updateProjectStatusEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.UPDATE_PROJECT_STATUS),
    mergeMap((action) =>
      updateProjectStatus(action).pipe(
        map((response) =>
          response.response.success
            ? actions.updateProjectStatusSuccess(
                response.response,
                action.payload
              )
            : actions.updateProjectStatusFailure(
                response.status,
                response.response,
                action.payload
              )
        ),
        catchError((error) =>
          of(
            actions.updateProjectStatusFailure(
              error.status,
              error.response,
              action.payload
            )
          )
        )
      )
    )
  )
}

export const fetchPublicProjectsEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.FETCH_PUBLIC_PROJECTS),
    switchMap((action) =>
      from(getPublicProjects(action)).pipe(
        switchMap((response) => [
          response.response.success
            ? actions.fetchPublicProjectsSuccess(
                response.response,
                action.payload
              )
            : actions.fetchPublicProjectsFailure(
                response.status,
                response.response,
                action.payload
              ),
        ]),
        catchError((error) =>
          of(
            actions.fetchPublicProjectsFailure(
              error.status,
              error.response,
              action.payload
            )
          )
        )
      )
    )
  )
}

export const applyToProjectEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.APPLY_PROJECT),
    mergeMap((action) =>
      applyToProject(action).pipe(
        map((response) =>
          response.response.success
            ? actions.applyProjectSuccess(response.response, action.payload)
            : actions.applyProjectFailure(
                response.status,
                response.response,
                action.payload
              )
        ),
        catchError((error) =>
          of(
            actions.updateProjectStatusFailure(
              error.status,
              error.response,
              action.payload
            )
          )
        )
      )
    )
  )
}

export const fetchApplicationsEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.FETCH_APPLICATIONS),
    switchMap((action) =>
      from(getApplications(action)).pipe(
        switchMap((response) => [
          response.response.success
            ? actions.fetchApplicationsSuccess(
                response.response,
                action.payload
              )
            : actions.fetchApplicationsFailure(
                response.status,
                response.response,
                action.payload
              ),
        ]),
        catchError((error) =>
          of(
            actions.fetchApplicationsFailure(
              error.status,
              error.response,
              action.payload
            )
          )
        )
      )
    )
  )
}

export default combineEpics(
  fetchUserEpic,
  createUserProfileEpic,
  updateUserEmailsEpic,
  fetchFreelancersEpic,
  createProjectEpic,
  fetchProjectsByStatusEpic,
  updateProjectStatusEpic,
  fetchPublicProjectsEpic,
  applyToProjectEpic,
  fetchApplicationsEpic
)
