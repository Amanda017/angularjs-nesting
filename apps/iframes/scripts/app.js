angular.module('iframeApp', ['ngRoute'])
    .constant("config", {
        appName: 'IFRAME EXAMPLE',
        url: 'http://localhost:3000/'
    })
    .controller('HomeCtrl', function($scope, $window, config) {
        var self = this;

        var iframeElement = document.getElementById("myIframe");

        //i frame loaded, sending 'ping' message
        iframeElement.onload = function(){
            $scope.$applyAsync(function(){
                self.loading = false;
            });

            iframeElement.contentWindow.postMessage("ping", config.url);
        };

        //receiving postmessage
        //see http://davidwalsh.name/window-postmessage
        $window.addEventListener('message', function(event){
            console.log(config.appName + ": received message " + event.data);

            if(event.origin !== 'http://localhost:3000') return;

            $scope.$applyAsync(function(){
                if(event.data == 'Roger!'){
                    console.log(config.appName + ": Ok my child has received the message");
                }
            });
        });

        this.currentChild = "";
        this.currentMessage = "";
        this.myIframe = null;
        this.loading = false;

        this.message = config.appName;

        this.changeChild = function(childName){
            self.loading = true;
            this.currentChild = config.url + childName;
            this.myIframe = document.getElementById("myIframe").contentWindow;
        };

        this.sendMessage = function(){
            if(self.myIframe){
                console.log("Sending message: " + self.currentMessage);
                self.myIframe.postMessage(self.currentMessage, config.url);
            }
        };

    })
;
