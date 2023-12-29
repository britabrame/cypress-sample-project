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
                bat "npm ci"
                // bat "npm install cypress --save-dev"             
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}" 
            }
        }

        stage('Publish results'){
            steps{              
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: true, 
                    keepAll: true, 
                    reportDir: 'reports', 
                    reportFiles: 'index.html', 
                    reportName: 'HTML Report', 
                    reportTitles: '', 
                    useWrapperFileDirectly: true])  
                
                // publishHTML (target : [
                //     allowMissing: false,
                //     alwaysLinkToLastBuild: true,
                //     keepAll: true,
                //     reportDir: 'reports',
                //     reportFiles: 'index.html',
                //     reportName: 'my-reports'])
            }
        }
        
        stage('Deploying'){
            steps{
                echo "Deploying the application"
            }
        }
    }
}