const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("XXXXXXXXXX- SENT you on Slack to update here ");

/*d-a67a394b864d424885f9b87d1921c76b = signupcofoimration
d-a8801738d21544908d4006365ce3432f = pssword reset email
d-92270064425548b1891533766a71df6c = share roadmap
d-0f4ab1caa98a46168a26f0888ab93cd5 = roadmap: weekly update ( Calculated Data of Roadmap )
*/

module.exports = function (to, subject, template_id, params, attachments=[]) {
  const from = {name: 'Support', email: 'support@2launch.io'};
   const msg = {
      to: to,
      from: from,
      templateId: template_id,
      dynamic_template_data: {subject:subject, ...params},
      attachments: attachments
    };
    return sgMail.send(msg);
}

