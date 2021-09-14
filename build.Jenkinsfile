pipeline {

    environment {
        dockerImage = null
    }

    parameters {
        string name: "REGISTRY", defaultValue: "principal", description: "Repository name"
        gitParameter defaultValue: 'latest',
                     name: 'VERSION',
                     type: 'PT_TAG',
                     description: 'Version to be built to dockerhub',
                     selectedValue: 'TOP',
                     sortMode: 'DESCENDING_SMART',
                     useRepository: 'customer'
    }
    
    stages {
        stage('Pulling repository') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'GIT_BACKEND_URL', variable: 'gitRepository')]) {
                        checkout([
                            $class: 'GitSCM', 
                            branches: [[name: "${params.VERSION}"]], 
                            doGenerateSubmoduleConfigurations: false, 
                            extensions: [], 
                            gitTool: 'Default', 
                            submoduleCfg: [], 
                            userRemoteConfigs: [[url: gitRepository, name: 'customer', credentialsId: 'GIT_CREDENTIAL']]
                        ])
                    }
                }
            }
        }

        stage("Building image") {
            steps {
                script {
                    sh 'pwd'
                    sh 'ls'
                    dockerImage = docker.build params.REGISTRY + ":" + (params.VERSION - ~/^v/)
                }
            }
        }
    }

    post { 
        always { 
            cleanWs()
        }
    }
}