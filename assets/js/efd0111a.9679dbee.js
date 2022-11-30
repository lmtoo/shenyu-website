"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1233],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>g});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},h=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=l,d=c["".concat(o,".").concat(g)]||c[g]||u[g]||r;return t?a.createElement(d,i(i({ref:n},h),{},{components:t})):a.createElement(d,i({ref:n},h))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},39243:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=t(87462),l=(t(67294),t(3905));const r={title:"ShenYu client Golang Release Guide",sidebar_position:14,description:"Apache ShenYu-client-golang Release Guide",cover:"/img/architecture/shenyu-framework.png"},i=void 0,s={unversionedId:"shenyu-client-golang-release-guide",id:"shenyu-client-golang-release-guide",isDocsHomePage:!1,title:"ShenYu client Golang Release Guide",description:"Apache ShenYu-client-golang Release Guide",source:"@site/community/14-shenyu-client-golang-release-guide.md",sourceDirName:".",slug:"/shenyu-client-golang-release-guide",permalink:"/community/shenyu-client-golang-release-guide",editUrl:"https://github.com/apache/shenyu-website/edit/main/community/14-shenyu-client-golang-release-guide.md",version:"current",lastUpdatedBy:"dragon-zhang",lastUpdatedAt:1669771943,formattedLastUpdatedAt:"11/30/2022",sidebarPosition:14,frontMatter:{title:"ShenYu client Golang Release Guide",sidebar_position:14,description:"Apache ShenYu-client-golang Release Guide",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"FAQ",permalink:"/community/faq"},next:{title:"ShenYu client .NET Release Guide",permalink:"/community/shenyu-client-dotnet-release-guide"}},o=[{value:"Update release notes",id:"update-release-notes",children:[]},{value:"Create GPG KEY",id:"create-gpg-key",children:[]},{value:"Publish Prepare Work",id:"publish-prepare-work",children:[]},{value:"Publish to SVN dev repository",id:"publish-to-svn-dev-repository",children:[]},{value:"Check Release",id:"check-release",children:[]},{value:"Voting Process",id:"voting-process",children:[{value:"ShenYu community vote",id:"shenyu-community-vote",children:[]}]},{value:"Finish publishing",id:"finish-publishing",children:[]},{value:"Release Announcement",id:"release-announcement",children:[]},{value:"Reissue (not required)",id:"reissue-not-required",children:[]}],p={toc:o};function h(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"update-release-notes"},"Update release notes"),(0,l.kt)("p",null,"Update ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-client-golang/blob/master/RELEASE-NOTES.md"},"RELEASE-NOTES")," in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"## ${PUBLISH.VERSION}\n\n### New Features\n\n1. xxx\n1. xxx\n...\n\n### API Changes\n\n1. xxx\n1. xxx\n...\n\n### Enhancement\n\n1. xxx\n1. xxx\n...\n\n### Refactor\n\n1. xxx\n1. xxx\n...\n\n### Bug Fix\n\n1. xxx\n1. xxx\n...\n")),(0,l.kt)("h2",{id:"create-gpg-key"},"Create GPG KEY"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Each release manager only creates a GPG KEY for the first release, which can be reused for subsequent releases.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Create KEY")),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"GnuPG"),"."),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnupg.org/documentation/manuals/gnupg/OpenPGP-Key-Management.html#OpenPGP-Key-Management"},"OpenPGP KEY Management")," ","[1]"," instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --full-gen-key\n")),(0,l.kt)("p",null,"Steps (the following are from console output)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'gpg (GnuPG) 2.2.4; Copyright (C) 2017 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n  (1) RSA and RSA (default)\n  (2) DSA and Elgamal\n  (3) DSA (sign only)\n  (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n        0 = key does not expire\n     <n>  = key expires in n days\n     <n>w = key expires in n weeks\n     <n>m = key expires in n months\n     <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: \uff08Set username\uff09(use your apache id)\nEmail address: \uff08Set email address\uff09 (use your apache email)\nComment: \uff08Fill in the comments\uff09\nYou selected this USER-ID:\n   "username (comments) <email>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nYou need a Passphrase to protect your secret key. \uff08Set password\uff09\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Verify KEY")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnupg.org/documentation/manuals/gnupg/Operational-GPG-Commands.html#Operational-GPG-Commands"},"Operational GPG Commands")," ","[2]"," instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --list-keys\n")),(0,l.kt)("p",null,"Output\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pub   rsa4096 2019-03-11 [SC]\n      095E0D21BC28CFC7A8B8076DF7DF28D237A8048C\nuid           username (comments) <email>\nsub   rsa4096 2019-03-11 [E]\n")),(0,l.kt)("p",null,"Public key is ",(0,l.kt)("inlineCode",{parentName:"p"},"095E0D21BC28CFC7A8B8076DF7DF28D237A8048C"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. Upload public key")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnupg.org/documentation/manuals/gnupg/Dirmngr-Options.html#Dirmngr-Options"},"Dirmngr Options")," ","[3]"," instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --send-key 095E0D21BC28CFC7A8B8076DF7DF28D237A8048C\n")),(0,l.kt)("h2",{id:"publish-prepare-work"},"Publish Prepare Work"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Publish with a new Tag")),(0,l.kt)("p",null,"Download and install ",(0,l.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git"),"."),(0,l.kt)("p",null,"Create tag and switch to ",(0,l.kt)("inlineCode",{parentName:"p"},"${PUBLISH.VERSION}"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'git clone https://github.com/apache/shenyu-client-golang.git ~/shenyu-client-golang\ncd ~/shenyu-client-golang/\ngit checkout master\ngit tag -a ${PUBLISH.VERSION} -m "${PUBLISH.VERSION} release shenyu client golang"\n')),(0,l.kt)("p",null,"Submit the code with updated version number and new tags."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin --tags\n")),(0,l.kt)("h2",{id:"publish-to-svn-dev-repository"},"Publish to SVN dev repository"),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"https://tortoisesvn.net/downloads.html"},"SVN"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Update KEYS file")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the release manager has not yet appended his or her public key to the KEYS file, do the following. Otherwise, skip this step.")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-signing.html#signing-basics"},"signing basics")," ","[5]"," instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir -p ~/keys/release/\ncd ~/keys/release/\nsvn --username=${LDAP ID} co https://dist.apache.org/repos/dist/release/shenyu\ncd ~/keys/release/shenyu\ngpg -a --export ${GPG username} >> KEYS\nsvn --username=${LDAP ID} commit -m "append to KEYS"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Adding source code packages and binary packages")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-publishing.html#uploading"},"Uploading packages")," ","[6]"," instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/svn_release/dev/\ncd ~/svn_release/dev/\nsvn --username=${LDAP ID} co https://dist.apache.org/repos/dist/dev/shenyu\nmkdir -p ~/svn_release/dev/shenyu/shenyu-client-golang/${PUBLISH.VERSION}\ngit archive --format=tar  --prefix=shenyu-client-golang-${PUBLISH.VERSION}/ ${PUBLISH.VERSION} | gzip > shenyu-client-golang-${PUBLISH.VERSION}-src.tar.gz\ncd ~/svn_release/dev/shenyu/shenyu-client-golang/${PUBLISH.VERSION}\ncp -f ~/shenyu/shenyu-client-golang/*.src.tar.gz ~/svn_release/dev/shenyu/shenyu-client-golang/${PUBLISH.VERSION}\ncp -f ~/shenyu/shenyu-client-golang/*.src.tar.gz.asc ~/svn_release/dev/shenyu/shenyu-client-golang/${PUBLISH.VERSION}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. Adding hashes")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-distribution#sigs-and-sums"},"Requirements for cryptographic signatures and checksums")," ","[7]"," instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"shasum -a 512 shenyu-client-golang-${PUBLISH.VERSION}-src.tar.gz  > shenyu-client-golang-${PUBLISH.VERSION}-src.tar.gz.sha512\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4. Submit the new release")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'cd ~/svn_release/dev/shenyu/shenyu-client-golang\nsvn add ${PUBLISH.VERSION}/\nsvn --username=${LDAP ID} commit -m "release shenyu-client-golang ${PUBLISH.VERSION}"\n')),(0,l.kt)("h2",{id:"check-release"},"Check Release"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Verify sha512 checksum")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://www.apache.org/info/verification.html#CheckingHashes"},"Checking Hashes")," ","[8]"," instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"shasum -c shenyu-client-golang-${PUBLISH.VERSION}-src.tar.gz.sha512\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Verifying GPG Signatures")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://www.apache.org/info/verification.html#CheckingSignatures"},"Checking Signatures")," ","[9]"," instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://downloads.apache.org/shenyu/KEYS >> KEYS\ngpg --import KEYS\ncd ~/svn_release/dev/shenyu/shenyu-client-golang/${PUBLISH.VERSION}\ngpg --verify shenyu-client-golang-${PUBLISH.VERSION}-src.tar.gz.asc shenyu-client-golang-${PUBLISH.VERSION}-src.tar.gz\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. Ensure that SVN is consistent with GitHub source code")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"Incubator Release Checklist")," ","[10]"," instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'wget https://github.com/apache/shenyu/shenyu-client-golang/archive/v${PUBLISH.VERSION}.zip\nunzip v${PUBLISH.VERSION}.zip\nmv shenyu-client-golang-${PUBLISH.VERSION} shenyu-client-golang-${PUBLISH.VERSION}-src\nunzip shenyu-client-golang-${PUBLISH.VERSION}.zip\ndiff -r -x "shenyu-examples" -x "shenyu-integrated-test" -x "static" shenyu-client-golang-${PUBLISH.VERSION}-src shenyu-client-golang-${PUBLISH.VERSION}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4. Check the source code package")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"Incubator Release Checklist")," ","[10]"," instructions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," files exist"),(0,l.kt)("li",{parentName:"ul"},"The year in the ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,l.kt)("li",{parentName:"ul"},"All files have ASF licenses at the beginning"),(0,l.kt)("li",{parentName:"ul"},"There are no ",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," that do not depend on the software"),(0,l.kt)("li",{parentName:"ul"},"There are no binaries that do not meet expectations"),(0,l.kt)("li",{parentName:"ul"},"Compilation passes (. /mvnw install) (JAVA 8 is currently supported)"),(0,l.kt)("li",{parentName:"ul"},"If there are third-party code dependencies.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"License compatibility for third-party code dependencies"),(0,l.kt)("li",{parentName:"ul"},"All licenses of third-party code dependencies are named in the ",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE")," file"),(0,l.kt)("li",{parentName:"ul"},"The full version of the third-party code dependency license is in the ",(0,l.kt)("inlineCode",{parentName:"li"},"license")," directory"),(0,l.kt)("li",{parentName:"ul"},"If the dependency is an Apache license and there are ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," files, then these ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," files need to be added to the project's ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," file")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"5. Check the binary package")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/licensing-howto.html#binary"},"Binary distributions")," ","[11]"," instructions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," files exist"),(0,l.kt)("li",{parentName:"ul"},"The year in the ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," file is correct"),(0,l.kt)("li",{parentName:"ul"},"All text files start with an ASF license"),(0,l.kt)("li",{parentName:"ul"},"No ",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," for undependent software"),(0,l.kt)("li",{parentName:"ul"},"If third-party code dependencies exist.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Third-party code dependent licenses are compatible"),(0,l.kt)("li",{parentName:"ul"},"All licenses of third-party code dependencies are named in the ",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE")," file"),(0,l.kt)("li",{parentName:"ul"},"The full version of the third-party code dependency license is in the ",(0,l.kt)("inlineCode",{parentName:"li"},"LICENSE")," directory"),(0,l.kt)("li",{parentName:"ul"},"If the dependency is an Apache license and there are ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," files, then these ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," files need to be added to the project's ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTICE")," file")))),(0,l.kt)("h2",{id:"voting-process"},"Voting Process"),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://www.apache.org/legal/release-policy.html#release-approval"},"RELEASE APPROVAL")," ","[12]",", ",(0,l.kt)("a",{parentName:"p",href:"https://incubator.apache.org/policy/incubation.html#Releases"},"Releases")," ","[13]",", ",(0,l.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/voting.html"},"voting")," ","[14]"," instructions."),(0,l.kt)("h3",{id:"shenyu-community-vote"},"ShenYu community vote"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Voting lasts for at least 72 hours and receives 3 ",(0,l.kt)("inlineCode",{parentName:"strong"},"+1 binding")," votes")),(0,l.kt)("p",null,"To:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dev@shenyu.apache.org\n")),(0,l.kt)("p",null,"Title:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[VOTE] Release Apache ShenYu Client Golang ${PUBLISH.VERSION}\n")),(0,l.kt)("p",null,"Content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Hello ShenYu Community,\n\nThis is a call for vote to release Apache ShenYu Client Golang version ${PUBLISH.VERSION}\n\nRelease notes:\nhttps://github.com/apache/shenyu/shenyu-client-golang/blob/master/RELEASE-NOTES.md\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/shenyu/shenyu-client-golang/${PUBLISH.VERSION}/\n\nGit tag for the release:\nhttps://github.com/apache/shenyu/shenyu-client-golang/tree/v${PUBLISH.VERSION}/\n\nRelease Commit ID:\nhttps://github.com/apache/shenyu/shenyu-client-golang/commit/xxxxxxxxxxxxxxxxxxxxxxx\n\nKeys to verify the Release Candidate:\nhttps://downloads.apache.org/shenyu/KEYS\n\nLook at here for how to verify this release candidate:\nhttps://shenyu.apache.org/community/release-guide/#check-release\n\nThe vote will be open for at least 72 hours or until necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n\n[ ] +0 no opinion\n\n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n\n[ ] Checksums and PGP signatures are valid.\n\n[ ] Source code distributions have correct names matching the current release.\n\n[ ] LICENSE and NOTICE files are correct for each ShenYu Client Golang repo.\n\n[ ] All files have license headers if necessary.\n\n[ ] No compiled archives bundled in source archive.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Announcement of voting results")),(0,l.kt)("p",null,"To:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dev@shenyu.apache.org\n")),(0,l.kt)("p",null,"Title:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[RESULT][VOTE] Release Apache ShenYu Client Golang ${PUBLISH.VERSION}\n")),(0,l.kt)("p",null,"Content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"We\u2019ve received 3 +1 binding votes and 2 +1 non-binding votes:\n\n+1, xxx (binding)\n+1, xxx (binding)\n+1, xxx (binding)\n+1, xxx (non-binding)\n+1, xxx (non-binding)\n\nVote thread:\nhttps://lists.apache.org/thread/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n\nThanks everyone for taking the time to verify and vote for the release!\n")),(0,l.kt)("h2",{id:"finish-publishing"},"Finish publishing"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Finish SVN release")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-publishing.html#uploading"},"Uploading packages")," ","[6]"," instructions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/shenyu/shenyu-client-golang/${PUBLISH.VERSION} https://dist.apache.org/repos/dist/release/shenyu/shenyu-client-golang/${PUBLISH.VERSION} -m "transfer packages for ${PUBLISH.VERSION}"\nsvn delete hhttps://dist.apache.org/repos/dist/dev/shenyu/shenyu-client-golang/${PREVIOUS.RELEASE.VERSION}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Finish GitHub release")),(0,l.kt)("p",null,"Edit ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/shenyu-client-golang/releases"},"Releases")," ",(0,l.kt)("inlineCode",{parentName:"p"},"${PUBLISH.VERSION}")," and click release."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git tag -d ${PUBLISH.VERSION}\ngit push origin :refs/tags/${PUBLISH.VERSION}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. Update download page")),(0,l.kt)("p",null,"Follow ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-download-pages.html"},"Release Download Pages for Projects")," ","[15]",", ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-publishing.html#normal"},"Normal distribution on the Apache downloads site")," ","[16]"," instructions."),(0,l.kt)("p",null,"After the Apache mirror links take effect (at least one hour), update the download page for:\n",(0,l.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/download/"},"English version")," and\n",(0,l.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/download/"},"Chinese version")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: Project download links should use ",(0,l.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.lua"},"https://www.apache.org/dyn/closer.lua")," instead of closer.cgi or mirrors.cgi"),(0,l.kt)("p",{parentName:"blockquote"},"Note: Download links for GPG signature files and hash-check files must use this prefix: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://downloads.apache.org/shenyu/"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4. Update documentation")),(0,l.kt)("p",null,"Archive the ",(0,l.kt)("inlineCode",{parentName:"p"},"${PUBLISH.VERSION}")," version of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-website"},"document")," and update the ",(0,l.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/versions/"},"version page"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"5. Update event page")),(0,l.kt)("p",null,"Add new release ",(0,l.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/event/$%7BPUBLISH.VERSION%7D-release"},"event"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"6. Update news page")),(0,l.kt)("p",null,"Add new release ",(0,l.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/news"},"news"),"."),(0,l.kt)("h2",{id:"release-announcement"},"Release Announcement"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: ",(0,l.kt)("inlineCode",{parentName:"p"},"announce@apache.org")," address requires the email to be sent in plain text format. If you are using Gmail, you can check ",(0,l.kt)("inlineCode",{parentName:"p"},"Plain Text Mode")," in the edit screen.")),(0,l.kt)("p",null,"To:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dev@shenyu.apache.org\nannounce@apache.org\n")),(0,l.kt)("p",null,"Title:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[ANNOUNCE] Apache ShenYu Client Golang ${PUBLISH.VERSION} available\n")),(0,l.kt)("p",null,"Content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Hi,\n\nApache ShenYu Team is glad to announce the new release of Apache ShenYu Client Golang ${PUBLISH.VERSION}.\n\nApache ShenYu is an asynchronous, high-performance, cross-language, responsive API gateway.\nSupport various languages (http protocol), support Dubbo, Spring-Cloud, Grpc, Motan, Sofa, Tars and other protocols.\nPlugin design idea, plugin hot swap, easy to expand.\nFlexible flow filtering to meet various flow control.\nBuilt-in rich plugin support, authentication, limiting, fuse, firewall, etc.\nDynamic flow configuration, high performance.\nSupport cluster deployment, A/B Test, blue-green release.\n\nDownload Links: https://shenyu.apache.org/download/\n\nRelease Notes: https://github.com/apache/shenyu-client-golang/blob/master/RELEASE-NOTES.md\n\nWebsite: https://shenyu.apache.org/\n\nShenYu Resources:\n- Issue: https://github.com/apache/shenyu/issues\n- Mailing list: dev@shenyu.apache.org\n- Documents: https://shenyu.apache.org/docs/index/\n\n\n- Apache ShenYu Team\n\n")),(0,l.kt)("h2",{id:"reissue-not-required"},"Reissue (not required)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: You only need to republish if the vote did not pass.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Cancellation of voting email template")),(0,l.kt)("p",null,"To:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dev@shenyu.apache.org\n")),(0,l.kt)("p",null,"Title:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[CANCEL][VOTE] Release Apache ShenYu Client Golang ${PUBLISH.VERSION}\n")),(0,l.kt)("p",null,"Content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Hi,\n\nI'm cancelling this vote because of xxxxxx issues. I'll fix them and start the round ${n} vote process.\nThe detail of the modifications are as follows:\n\n1. xxxxxx\n2. xxxxxx\n\nThanks a lot for all your help.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Clean stagingRepositories")),(0,l.kt)("p",null,"Go to ",(0,l.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories"),", After logging in with your Apache LDAP account, select the previous ",(0,l.kt)("inlineCode",{parentName:"p"},"Close")," version and click ",(0,l.kt)("inlineCode",{parentName:"p"},"Drop"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3\u3002Deleting GitHub branches and tags")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin --delete ${PUBLISH.VERSION}-release\ngit branch -D ${PUBLISH.VERSION}-release\ngit push origin --delete tag v${PUBLISH.VERSION}\ngit tag -d v${PUBLISH.VERSION}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4. Deleting SVN content to be published")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'svn delete https://dist.apache.org/repos/dist/dev/shenyu/shenyu-client-golang/${PUBLISH.VERSION} -m "delete ${PUBLISH.VERSION}"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"5. Update email title")),(0,l.kt)("p",null,"After completing the above steps, you can start the re-posting operation. The next poll email title needs to have the ",(0,l.kt)("inlineCode",{parentName:"p"},"[ROUND ${n}]")," suffix added. For example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[VOTE] Release Apache ShenYu Client Golang ${PUBLISH.VERSION} [ROUND 2]\n")),(0,l.kt)("p",null,"Voting result and announcement emails do not need to be suffixed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The content refers to")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[1]"," ",(0,l.kt)("a",{parentName:"li",href:"https://www.gnupg.org/documentation/manuals/gnupg/OpenPGP-Key-Management.html#OpenPGP-Key-Management"},"https://www.gnupg.org/documentation/manuals/gnupg/OpenPGP-Key-Management.html#OpenPGP-Key-Management")),(0,l.kt)("li",{parentName:"ul"},"[2]"," ",(0,l.kt)("a",{parentName:"li",href:"https://www.gnupg.org/documentation/manuals/gnupg/Operational-GPG-Commands.html#Operational-GPG-Commands"},"https://www.gnupg.org/documentation/manuals/gnupg/Operational-GPG-Commands.html#Operational-GPG-Commands")),(0,l.kt)("li",{parentName:"ul"},"[3]"," ",(0,l.kt)("a",{parentName:"li",href:"https://www.gnupg.org/documentation/manuals/gnupg/Dirmngr-Options.html#Dirmngr-Options"},"https://www.gnupg.org/documentation/manuals/gnupg/Dirmngr-Options.html#Dirmngr-Options")),(0,l.kt)("li",{parentName:"ul"},"[4]"," ",(0,l.kt)("a",{parentName:"li",href:"https://infra.apache.org/publishing-maven-artifacts.html"},"https://infra.apache.org/publishing-maven-artifacts.html")),(0,l.kt)("li",{parentName:"ul"},"[5]"," ",(0,l.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-signing.html#signing-basics"},"https://infra.apache.org/release-signing.html#signing-basics")),(0,l.kt)("li",{parentName:"ul"},"[6]"," ",(0,l.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-publishing.html#uploading"},"https://infra.apache.org/release-publishing.html#uploading")),(0,l.kt)("li",{parentName:"ul"},"[7]"," ",(0,l.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-distribution#sigs-and-sums"},"https://infra.apache.org/release-distribution#sigs-and-sums")),(0,l.kt)("li",{parentName:"ul"},"[8]"," ",(0,l.kt)("a",{parentName:"li",href:"https://www.apache.org/info/verification.html#CheckingHashes"},"https://www.apache.org/info/verification.html#CheckingHashes")),(0,l.kt)("li",{parentName:"ul"},"[9]"," ",(0,l.kt)("a",{parentName:"li",href:"https://www.apache.org/info/verification.html#CheckingSignatures"},"https://www.apache.org/info/verification.html#CheckingSignatures")),(0,l.kt)("li",{parentName:"ul"},"[10]"," ",(0,l.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist")),(0,l.kt)("li",{parentName:"ul"},"[11]"," ",(0,l.kt)("a",{parentName:"li",href:"https://infra.apache.org/licensing-howto.html#binary"},"https://infra.apache.org/licensing-howto.html#binary")),(0,l.kt)("li",{parentName:"ul"},"[12]"," ",(0,l.kt)("a",{parentName:"li",href:"https://www.apache.org/legal/release-policy.html#release-approval"},"https://www.apache.org/legal/release-policy.html#release-approval")),(0,l.kt)("li",{parentName:"ul"},"[13]"," ",(0,l.kt)("a",{parentName:"li",href:"https://incubator.apache.org/policy/incubation.html#Releases"},"https://incubator.apache.org/policy/incubation.html#Releases")),(0,l.kt)("li",{parentName:"ul"},"[14]"," ",(0,l.kt)("a",{parentName:"li",href:"https://www.apache.org/foundation/voting.html"},"https://www.apache.org/foundation/voting.html")),(0,l.kt)("li",{parentName:"ul"},"[15]"," ",(0,l.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-download-pages.html"},"https://infra.apache.org/release-download-pages.html")),(0,l.kt)("li",{parentName:"ul"},"[16]"," ",(0,l.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-publishing.html#normal"},"https://infra.apache.org/release-publishing.html#normal"))))}h.isMDXComponent=!0}}]);