pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/aasif-code/code.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    cp -r code/* /var/www/html
                    ls -l /var/www/html
                '''
                    
            }
        }
        
    }
}
