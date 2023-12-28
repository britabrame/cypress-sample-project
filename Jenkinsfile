pipeline{

    agent any

    parameters{
        string(name:'SPEC', defaultValue: 'cypress/e2e/**/**', description: 'Enter the script path that you want to excecute')
        choice(name: 'BROWSER', choices: ['chrome', 'electron'], description: 'Choose the browser to use')

    }

    stages{
        stage('Building'){
            steps{
                echo "Building the application"
            }
        }

        stage('Testing'){
            steps{
                bat "npm install"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying'){
            steps{
                echo "Deploying the application"
            }
        }
    }
}