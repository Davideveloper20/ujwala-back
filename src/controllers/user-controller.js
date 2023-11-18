const User = require('../models/user-model');

const path = require('path');




const Appointment = require('../models/appointment-model');

const transporter = require('../config/transporter'); 

exports.createUser = async (req, res) => {
const imagePath = path.join(__dirname, '../public/img/agenda-abierta.jpg');

const imagePathEmail = path.join(__dirname, '../public/img/about6.jpg');


  try {

    const { name, email, phone, date, massageType, status } = req.body;


    const user = new User({ name, email, phone });

    await user.save();

    console.log('MI USER ID REAL:',user._id)
   

    const appointment = new Appointment({
      date: date,
      massageType: massageType,
      status: status,
      user: user._id, 
    });

    await appointment.save();

    const mailOptions = {
      from: 'davidfunesme@hotmail.com',
      to: user.email, 
      cc: 'davideveloper20@gmail.com', 
      subject: '¡Bienvenid@ a esta gran experiencia con UJWALA!',
    

    html: `
    <html>
    <body>
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">

    <!-- START HEADER/BANNER -->
    
        <tbody><tr>
          <td align="center">
            <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
              <tbody><tr>
                <td align="center" valign="top" background=${imagePath} bgcolor="#66809b" style="background-size:cover; background-position:top;height=" 400""="">
                  <table class="col-600" width="600" height="400" border="0" align="center" cellpadding="0" cellspacing="0">
    
                    <tbody><tr>
                      <td height="40"></td>
                    </tr>
    
                  
    
    
    
                    <tr>
                      <td align="center" style="font-family: 'Raleway', sans-serif; font-size:37px; color:#000; line-height:24px; font-weight: bold; letter-spacing: 7px;">
                        UJWALA 
                      </td>
                    </tr>  
    
    
                    <tr>
                      <td align="center" style="font-family: 'Lato', sans-serif; font-size:15px; color:#000; line-height:24px; font-weight: 300;">
                        Vive y comparte esta experiencia con la naturaleza y la mente.
                      </td>
                    </tr>
    
    
                    <tr>
                      <td height="50"></td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
    
    
    <!-- END HEADER/BANNER -->
    
    
    <!-- START 3 BOX SHOWCASE -->
    
        <tr>
          <td align="center">
            <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px; border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
              <tbody><tr>
                <td height="35"></td>
              </tr>
    
              <tr>
                <td align="center" style="font-family: 'Raleway', sans-serif; font-size:22px; font-weight: bold; color:#2a3a4b;">Hola  ${user.name} , bienvenid@ . A continuación se encuentra toda información y pago de la cita</td>
              </tr>
    
              <tr>
                <td height="10"></td>
              </tr>
    
              <tr>
                <td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 800;">
                Debes realizar el pago en la siguiente cuenta bancaria: 1234-5678-9012-3456
                </td>
              </tr>

               <tr>
                <td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 800;">
                Luego debes enviar el comprobante de pago al WhatsApp: 305 4069921
                </td>
              </tr>

              <tr>
              <td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 800;">
              Fecha y hora de la cita: ${appointment.date}
              </td>
            </tr>

            <tr>
            <td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 800;">
            Lugar de la cita: Calle 4 sur N 64-67 Santa Elena, Parcelas Santa María (En toda la estación de policía principal de Sta Elena)
            </td>
          </tr>

          <tr>
          <td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 800;">
          Tipo de masaje: ${appointment.massageType}
          </td>
        </tr>

        <tr>
        <td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 800;">
        Recuerda realizar el pago antes de las 24 horas de la cita, te esperamos!!!
        </td>
      </tr>            
    
            </tbody></table>
          </td>
        </tr>
    
    
    
    <!-- START FOOTER -->
    
        <tr>
          <td align="center">
            <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
              <tbody><tr>
                <td height="50"></td>
              </tr>
              <tr>
                <td align="center" bgcolor="#34495e" background=${imagePathEmail} height="185">
                  <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                      <td height="25"></td>
                    </tr>
    
                      <tr>
                      <td align="center" style="font-family: 'Raleway',  sans-serif; font-size:26px; font-weight: 500; color:#f1c40f;">Síguenos en nuestras redes sociales, vive ujwala</td>
                      </tr>
    
    
                    <tr>
                      <td height="25"></td>
                    </tr>
    
    
    
                    </tbody></table><table align="center" width="35%" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                      <td align="center" width="30%" style="vertical-align: top;">
                          <a href="https://www.facebook.com/designmodo" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-fb.png"> </a>
                      </td>
    
                      <td align="center" class="margin" width="30%" style="vertical-align: top;">
                         <a href="https://twitter.com/designmodo" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-twitter.png"> </a>
                      </td>
    
                      <td align="center" width="30%" style="vertical-align: top;">
                          <a href="https://plus.google.com/+Designmodo/posts" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-googleplus.png"> </a>
                      </td>
                    </tr>
                    </tbody></table>
    
    
    
                  </td></tr></tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
    
    <!-- END FOOTER -->
    
                
              
            </tbody></table>

            </body>
    
    </html>
  `,    

};

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo electrónico:', error);
      } else {
        console.log('Correo electrónico enviado:', info.response);
      }
    });

    res.json({ user, appointment });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario y cita' });
  }
};
