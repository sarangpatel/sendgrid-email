const sendgridMail  = require('./sendgrid-mail');

/* confirm signiup email ***/
async function sendMail(){
	const params = {confirm_url: 'http://tokenurl/sometokenvalue'};
	await sendgridMail('sarangpatel23@gmail.com', 'Confirm Your Email and Get Started', 'd-a67a394b864d424885f9b87d1921c76b', params).then((res) => {
	    console.log('Message sent.', res);
	}).catch(e => {
		console.log('Error:', e);
	});
}

/* Password reset request ***/
/*async function sendMail(){
	const params = {new_password: 'XXXXXXXXXXX'};
	await sendgridMail('sarangpatel23@gmail.com', 'Password Reset Request', 'd-a8801738d21544908d4006365ce3432f', params).then((res) => {
	    console.log('Message sent.', res);
	}).catch(e => {
		console.log('Error:',e);
	});
}*/

/***  share roadmap *********/
/*async function sendMail(){
	const params = {username: 'sarangpatel', roadmapname:'RoadMap Name', is_url:true, url:'http://google.com'}; 
	//const params = {username: 'sarangpatel', roadmapname:'RoadMap Name', is_url:false, url:null}; 
	await sendgridMail('sarangpatel23@gmail.com', 'Sarang shared a roadmap with you', 'd-92270064425548b1891533766a71df6c', params).then((res) => {
	    console.log('Message sent.', res);
	}).catch(e => {
		console.log('Error:',e);
	});
}*/

/** roadmap: weekly update *********/
/*async function sendMail(){
	const fs = require('fs'); 
	const content = fs.readFileSync('./doc.pdf'); 
	const attachments = [
	    {
          content: content.toString('base64'),
          filename: 'some-attachment.pdf',
          type: 'application/pdf',
          disposition: 'attachment'
        },
	];
	await sendgridMail('sarangpatel23@gmail.com', 'Calculated Data of Roadmap', 'd-0f4ab1caa98a46168a26f0888ab93cd5', null, attachments).then((res) => {
	    console.log('Message sent.', res);
	}).catch(e => {
		console.log('Error:',e);
	});
}*/
sendMail();