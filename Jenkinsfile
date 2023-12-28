pipeline{

    agent any

    parameters{
        string(name:'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path that you want to excecute")
        choice(name: 'BROWSER', choices['chrome', 'electron'], description: "Choose the browser to use")

    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            echo "Building the application"
        }

        stage('Testing'){
            steps{
                bat "npn i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying'){
            echo "Deploying the application"
        }
    }

    post{
        // publish reports
    }
}