### About
This is a Cypress test framework developed to demo basic Cypress e2e tests and Jenkins Pipeline.

### Built with
* Cypress web automation testing tool
* Mocha & Chai test frameworks
* Mochawesome reports
* JavaScript
* Jenkins Pipeline

### Features
* Demo component tests for verification of the search functionality, located in *cypress/e2e/searching*
* Reports generated using Mochawesome
* Jenkins pipeline that runs the e2e tests and then publishes an HTML report with results

### Setup
*Recommended IDE is Visual Studio Code*
1. Download the NodeJs installer (msi) from https://nodejs.org/en/download/ (the latest node version with come with npm). Follow the steps in the installation wizard.
1. Clone the project locally:
	```
	git clone https://github.com/britabrame/cypress-sample-project.git
	```
1. From the project directory, install dependencies:
	```
	npm install
	```
### Running tests
* To run tests:
	```
	npm run cy:test
	```
* To generate reports into the cypress/reports/mochawesome-html-report directory:
	```
	npm run cy:report
	```
### Jenkins
Jenkins builds for this project:
![Screenshot](https://github.com/britabrame/cypress-sample-project/blob/master/jenkins-images/JenkinsBuilds.png?raw=true)

<details>  
	<summary>Console output from successful Jenkins build</summary>  
	<p> 
	Started by user [Brittany Brame](http://localhost:9090/user/babrame)
Obtained Jenkinsfile from git [https://github.com/britabrame/cypress-sample-project](https://github.com/britabrame/cypress-sample-project)
[Pipeline] Start of Pipeline [Pipeline] node Running on [Jenkins](http://localhost:9090/computer/(built-in)/) in C:\ProgramData\Jenkins\.jenkins\workspace\cypress-pipeline [Pipeline] { [Pipeline] stage [Pipeline] { (Declarative: Checkout SCM) [Pipeline] checkout The recommended git tool is: git.exe
No credentials specified
 > git.exe rev-parse --resolve-git-dir C:\ProgramData\Jenkins\.jenkins\workspace\cypress-pipeline\.git # timeout=10
Fetching changes from the remote Git repository
 > git.exe config remote.origin.url [https://github.com/britabrame/cypress-sample-project](https://github.com/britabrame/cypress-sample-project) # timeout=10
Fetching upstream changes from [https://github.com/britabrame/cypress-sample-project](https://github.com/britabrame/cypress-sample-project)
 > git.exe --version # timeout=10
 > git --version # 'git version 2.43.0.windows.1'
 > git.exe fetch --tags --force --progress -- [https://github.com/britabrame/cypress-sample-project](https://github.com/britabrame/cypress-sample-project) +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git.exe rev-parse "refs/remotes/origin/master^{commit}" # timeout=10
Checking out Revision 61a49b4a9425af612e1ccdee86380f7272a8be06 (refs/remotes/origin/master)
 > git.exe config core.sparsecheckout # timeout=10
 > git.exe checkout -f 61a49b4a9425af612e1ccdee86380f7272a8be06 # timeout=10
Commit message: "fixed failing test"
 > git.exe rev-list --no-walk 4371352cc712c389b4cfd784bb4a05b32cd36381 # timeout=10 [Pipeline] } [Pipeline] // stage [Pipeline] withEnv [Pipeline] { [Pipeline] stage [Pipeline] { (Building) [Pipeline] echo Building the application [Pipeline] } [Pipeline] // stage [Pipeline] stage [Pipeline] { (Testing) [Pipeline] bat  C:\ProgramData\Jenkins\.jenkins\workspace\cypress-pipeline>npm ci 

added 274 packages, and audited 275 packages in 3s

54 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities [Pipeline] script [Pipeline] { [Pipeline] bat  C:\ProgramData\Jenkins\.jenkins\workspace\cypress-pipeline>npx cypress run --browser electron --spec cypress/e2e/**/** 


DevTools listening on ws://127.0.0.1:49783/devtools/browser/d8545830-dbc6-41a7-92fb-b3747176f0dd

[90m====================================================================================================[39m

[0m  ([4m[1mRun Starting[22m[24m)[0m

[90m  ┌[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┐[39m
[90m  │[39m [90mCypress:[39m        13.6.1                                                                         [90m│[39m
[90m  │[39m [90mBrowser:[39m        Electron 114 [90m(headless)[39m                                                        [90m│[39m
[90m  │[39m [90mNode Version:[39m   [0mv20.10.0 [90m(C:\Program Files\nodejs\node.exe)[39m[0m                                    [90m│[39m
[90m  │[39m [90mSpecs:[39m          [0m1 found (searchingSpec.cy.js)[0m                                                  [90m│[39m
[90m  │[39m [90mSearched:[39m       [0mC:\ProgramData\Jenkins\.jenkins\workspace\cypress-pipeline\cypress\e2e\**\**[0m   [90m│[39m
[90m  └[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┘[39m


[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m
                                                                                                    
  Running:  [90msearchingSpec.cy.js[39m                                                             [90m(1 of 1)[39m
[7080:1229/154826.296:ERROR:gpu_process_host.cc(954)] GPU process exited unexpectedly: exit_code=34
[7080:1229/154826.368:ERROR:gpu_process_host.cc(954)] GPU process exited unexpectedly: exit_code=34
[7080:1229/154826.421:ERROR:gpu_process_host.cc(954)] GPU process exited unexpectedly: exit_code=34

[0m[0m
[0m  Search Box [0m
  [32m  √[0m[90m generates correct autosuggest options when the user enters 3 characters[0m[33m (5826ms)[0m
  [32m  √[0m[90m allows search using autosuggest options[0m
  [32m  √[0m[90m allows search by manually typing a search[0m


[92m [0m[32m 3 passing[0m[90m (14s)[0m

[[90mmochawesome[39m] Report JSON saved to C:\ProgramData\Jenkins\.jenkins\workspace\cypress-pipeline\cypress\reports\mochawesome_008.json


[32m  ([4m[1mResults[22m[24m)[39m

[90m  ┌[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┐[39m
[90m  │[39m [90mTests:[39m        [32m3[39m                                                                                [90m│[39m
[90m  │[39m [90mPassing:[39m      [32m3[39m                                                                                [90m│[39m
[90m  │[39m [90mFailing:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mPending:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mSkipped:[39m      [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mScreenshots:[39m  [32m0[39m                                                                                [90m│[39m
[90m  │[39m [90mVideo:[39m        [32mtrue[39m                                                                             [90m│[39m
[90m  │[39m [90mDuration:[39m     [32m14 seconds[39m                                                                       [90m│[39m
[90m  │[39m [90mSpec Ran:[39m     [32m[32msearchingSpec.cy.js[32m[39m                                                              [90m│[39m
[90m  └[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┘[39m


[36m  ([4m[1mVideo[22m[24m)[39m

  -  Video output: [36mC:\ProgramData\Jenkins\.jenkins\workspace\cypress-pipeline\cypress\videos\searchingSpec.cy.js.mp4[39m


[90m====================================================================================================[39m

[0m  ([4m[1mRun Finished[22m[24m)[0m


[90m   [39m    [90mSpec[39m                                              [90mTests[39m  [90mPassing[39m  [90mFailing[39m  [90mPending[39m  [90mSkipped[39m [90m [39m
[90m  ┌[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┐[39m
[90m  │[39m [32m✔[39m  [0msearchingSpec.cy.js[0m                      [90m00:14[39m        [0m3[0m        [32m3[39m        [90m-[39m        [90m-[39m        [90m-[39m [90m│[39m
[90m  └[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m─[39m[90m┘[39m
[90m   [39m [32m✔[39m  [32mAll specs passed![39m                        [90m00:14[39m        [0m3[0m        [32m3[39m        [90m-[39m        [90m-[39m        [90m-[39m [90m [39m [Pipeline] } [Pipeline] // script [Pipeline] bat  C:\ProgramData\Jenkins\.jenkins\workspace\cypress-pipeline>npm run cy:report 

> cypress-sample-project@1.0.0 cy:report
> npm run merge_reports && npm run mochawesome_report


> cypress-sample-project@1.0.0 merge_reports
> mochawesome-merge cypress/reports/*.json > output.json


> cypress-sample-project@1.0.0 mochawesome_report
> marge --reportDir cypress/reports/mochawesome-html-report -t Cypress_Test_Report -p Cypress_HTML_Report -f Cypress_HTML_Report --charts true output.json


✓ Reports saved:
C:\ProgramData\Jenkins\.jenkins\workspace\cypress-pipeline\cypress\reports\mochawesome-html-report\Cypress_HTML_Report.html [Pipeline] echo null [Pipeline] } [Pipeline] // stage [Pipeline] stage [Pipeline] { (Publish results) [Pipeline] publishHTML [htmlpublisher] Archiving HTML reports...
[htmlpublisher] Archiving at BUILD level C:\ProgramData\Jenkins\.jenkins\workspace\cypress-pipeline\cypress\reports\mochawesome-html-report to C:\ProgramData\Jenkins\.jenkins\jobs\cypress-pipeline\builds\34\htmlreports\HTML_20Report [Pipeline] } [Pipeline] // stage [Pipeline] stage [Pipeline] { (Deploying) [Pipeline] echo Deploying the application [Pipeline] } [Pipeline] // stage [Pipeline] } [Pipeline] // withEnv [Pipeline] } [Pipeline] // node [Pipeline] End of Pipeline Finished: SUCCESS
	</p>  
</details>
