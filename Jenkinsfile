pipeline {
    agent any
    triggers {
        cron('H H H H H')
    }
    stages {
        stage('Scheduled pipeline') {
            steps {
                echo 'Pipeline works!!!'
            }
        }
    }
}