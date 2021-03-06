'use strict';

angular.module('boardatjobApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('company', {
                parent: 'entity',
                url: '/company',
                data: {
                    //roles: ['ROLE_USER'],
                    pageTitle: 'boardatjobApp.company.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/company/companys.html',
                        controller: 'CompanyController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('company');
                        return $translate.refresh();
                    }]
                }
            })
            .state('companyDetail', {
                parent: 'entity',
                url: '/company/:id',
                data: {
                    //roles: ['ROLE_USER'],
                    pageTitle: 'boardatjobApp.company.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/company/company-detail.html',
                        controller: 'CompanyDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('company');
                        return $translate.refresh();
                    }]
                }
            })
            .state('mycompany', {
                parent: 'entity',
                url: '/mycompany',
                data: {
                    roles: ['ROLE_RECRUITER'],
                    pageTitle: 'boardatjobApp.company.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/company/my-company.html',
                        controller: 'MyCompanyController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('company');
                        return $translate.refresh();
                    }]
                }
            });
    });
