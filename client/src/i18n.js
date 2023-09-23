import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "relativeTime": {
          "past": "{{count}} minutes ago",
          "s": "a moment ago",
          "m": "a minute ago",
          "mm": "{{count}} minutes ago",
          "h": "an hour ago",
          "hh": "{{count}} hours ago",
          // ...
        },
         
        "Suggestions for you": "Suggestions for you",
        "welcome to Tassili Share your post with us": "Welcome to Tasili! Share your ideas with us",
        "share your post with us": "Share your post with us",
        "No post": "No post",
        "busquedahome": "No result found with this search, try with other keywords",
        "what are you thinking?": "what are you thinking?",
        "Follow": "Follow",
        "unfollow": "Unfollow",
        "Followers": "Followers",
        "Following": "Following",
        "ingles": "English",
        "language": "Language",
        "titulo": "Tassili",
        "Enter to Search": "Enter to Search",
        "Rechercheavance": "Advanced search",
        "tipodetranzaccion": "Transaction Type",
        "Vente": "Sale",
        "Locacion": "Rent",
        "voireprofile": "View profile",
        "publieunpost": "Publish a post",
        "comunicarconeladiminstrador": "Contact the administrator",
        "recherche": "Search",

        "Mes notifications": "My notifications",
        


        "La información de contacto no esta autorizada por el proprietarios del articulo.": "The contact information is not authorized by the owners of the article",
        "Los comentarios no están autorizados por el propietario del post.": "Comments are not authorized by the owner of the post",
        "Contact & Coordonnés": "Contact & Coordinates",
        " Description de l'annonce": "Description of the announcement",
        "Automobiles": "Automobiles",
        "Specification": "Specification",
        "llamar al contacto": "Call contact",
        "Comments": "Comments",
        "Write your description or comment here.": "Write your description or comment here.",
 


        "Voir les détails": "View Details",



        "comments": "comments",
        "likes": "likes",
        "Copy Link": "Copy Link",
        "Denunciar": "Inform the administrator",
        "Edit automobile": "Edit car",
        "Aprove automobile": "Aprove car",
        "See more comments": "See more comments",
        "Hide comments": "Hide comments",
        "update": "update",
        "cancel": "cancel",
        "Edit": "Edit",
        "Remove": "Remove",
       
        "Description de l'annonce": "Description of the announcement",
        "Options de voiture": "Car options",
        
        
        "Automobile": "Automóvil",
        "Questions & Réponses":"questions and answers",

        'Annuler' : 'Cancel' ,
        'Répondre':'Reply',




        "profile": "Profile",
        "Dark mode": "Dark mode",
        "Light mode": "Light mode",
        "logout": "Logout",
        "Post": "Post",
        "Create Post": "Create a post",
        "Hide": "Hide",
        "Show": "Show",

        "Loading": "Loading",

        "Register": "Register",
        "V-Network": "Tassili social network",
        "Tassili": "Tassili",

        "Already have an account?": "Already have an account?",
        "Login Now": "Login Now",
        "Info": "Su información está encriptada y almacenada de forma segura.",

        "Loginn": "Login",
        "You dont have an account?": "You dont have an account?",
        "Register Now": "Register Now",

        "editar perfile": "Change profile",
        "Close": "Close",
        "Change": "Change",
        "User Name": "User Name",
        "Full Name": "Full Name",
        "Password": "Password",
        "Confirm Password": "Confirm Password",

        "Email address": "Email address",
        "Mobile": "Mobile",
        "Address": "Address",
        "Websit": "Websit",
        "Story": "Story",


        "Other": "Other",
        "Save": "Save",


        "Error": "Error",
        "Success": "Success",

        "statusmodel": "statusmodel",
        "Please add your photo.": "Please add your photo.",



      }
    },

    fr: {
      translation: {
         
        "relativeTime": {
          "past": "il y a {{count}} minutes",
          "s": "il y a un moment",
          "m": "il y a une minute",
          "mm": "il y a {{count}} minutes",
          "h": "il y a une heure",
          "hh": "il y a {{count}} heures",
          // ...
        },

        
        "Suggestions for you": "Suggestions pour vous",
        "welcome to Tassili Share your post with us": "Bienvenue à Tasili! Partage tes idées avec nous",
        "share your post with us": "Partagez votre publication avec nous",
        "No post": "Pas d'article",
        "busquedahome": "Aucun résultat trouvé avec cette recherche, essayez avec d'autres mots clés",
        "Rechercheavance": "Recherche avancée",
        "tipodetranzaccion": "Type de transaction",
         
      
        "voireprofile": "Voir le profil",
        "publieunpost": "Publier un article",
        "comunicarconeladiminstrador": "Administrateur",
        "recherche": "Recherche",

        "Mes notifications": "Mes notifications",
        "Vente": "Vente",  
        "Locacion": "Location",
        
          "comments": "commentaires",
          "likes": "likes",
          "Copy Link": "Copier le lien",
          "Denunciar": "Signaler",
          "Edit automobile": "Modifier la voiture",
          "Aprove automobile": "Approuver la voiture",
          "See more comments": "Voir plus de commentaires",
          "Hide comments": "Masquer les commentaires",
          "update": "mettre à jour",
          "cancel": "annuler",
          "Edit": "Modifier",
          "Remove": "Supprimer",
          "Contact & Coordonnés": "Contact et coordonnées",
          "Description de l'annonce": "Description de l'annonce",
          "Options de voiture": "Options de voiture",
          "Description": "Description",
          "Comments": "Commentaires",
          "Automobile": "Automobile",
        
          "Questions & Réponses":"Questions & Réponses",
          'Annuler' : 'Annuler' ,
          'Répondre':'Répondre',
         


        "Voir les détails": "Voir les détails",
       
      
       
  
       
        


        "frances": "Français",
        "language": "Langage",
        "titulo": "Tassili ",
        "Enter to Search": "Rechercher",
        "No Post": "Vous N'avez pas de publication",
        "profile": "Profil",
        "Dark mode": "Mode sombre",
        "Light mode": "Mode éclairé",
        "logout": "Se déconnecter",
        "post": "Publier",
        "Create Post": "Créer une publication",

        "Loading": "Loading",


        "Register": "Enregistrer",
        "V-Network": "Tassili Automobile",
        "Tassili": "Tassili",

        "Hide": "Cacher",
        "Show": "Montrer",
        "Already have an account?": "Vous avez déjà un compte?",
        "Login Now": "Connecte maintenant",
        "Register Now": "Inscrivez-vous maintenant",

        "Loginn": "Connexion",
        "You dont have an account?": "Vous n'avez pas de compte ?",
        "Info": "Vos informations sont cryptées et stockées en toute sécurité.",

        "editar perfile": "Change de profil",
        "Close": "Fermer",
        "Change": "Changement",
        "Full Name": "Nom et prénom",
        "User Name": "Nom d'utilisateur",

        "Password": "Mot de passe",
        "Confirm Password": "Confirmez le mot de passe",
        "Email address": "Courrier électronique",
        "Mobile": "Tfl Mobile",
        "Address": "Adresse",
        "Websit": "Site Web",
        "Story": "Histoire",


        "Other": "Autre",
        "Save": "Sauvegarder",

        "Error": "Erreur",
        "Success": "Succès",


        "statusmodel": "statusmodel",
        "Please add your photo.": "Veuillez ajouter votre photo.",


      }
    },
    ar: {
      translation: {

         
        "timeAgo": "منذ {time}",
        
         
        "Suggestions for you": " اقتراحات لك من المستخدمين",
        "welcome to Tassili Share your post with us": "مرحبا بكم في تاسيلي شاركنا بأفكارك",
        "share your post with us": "شارك منشورك معنا",
        "No post": "لا توجد مشاركات",
        "busquedahome": "لم يتم العثور على نتيجة لهذا البحث ، حاول باستخدام كلمات رئيسية أخرى",
        "follow": "اتبعه",
        "unfollow": "الغاء المتابعة",
        "followers": "متابعون",
        "following": "متابَع",
        "Arabe": "العربية",
        "language": "اللغة",
        "Enter to Search": "بحث المستخدمين",
        "Rechercheavance": "بحث  متقدم",
        "tipodetranzaccion": "نوع المعاملة",
      
      
        "voireprofile": "الصفحة الشخصية",
        "publieunpost": "نشر منشور",
        "comunicarconeladiminstrador": "التواصل مع المسؤولين",
        "recherche": "بحث",
        "Voir les détails": "عرض التفاصيلل",
        "Mes notifications": "إشعارات",

        'Annuler' :  "إلغاء",
        'Répondre': "الإجابة",

        "comments": "تعليقات",
        "likes": "إعجابات",
        "Copy Link": "نسخ الوصلة",
        "Denunciar": "أبلغ المسؤول",
        "Edit automobile": "تعديل المنشور",
        "Aprove automobile": "موافقة على المشاركة",
        "See more comments": "مشاهدة المزيد من التعليقات",
        "Hide comments": "إخفاء التعليقات",
        "update": "تحديث",
        "cancel": "إلغاء",
        "Edit": "تعديل",
        "Remove": "حذف",


       
           
 
        
     
        
          "Contact & Coordonnés": "الاتصال والتنسيق",
          "Description de l'annonce": "وصف الإعلان",
          "Options de voiture": "خيارات السيارة",
          "Description": "وصف",
          "Comments": "تعليقات",
          "Automobile": "سيارة",
          "Questions & Réponses":"أسئلة وأجوبة",
           
          "Vente": "بيع",  
          "Location": "إيجار",



        "profile": "حساب تعريفي",
        "Dark mode": "الوضع المظلم",
        "Light mode": "وضع الإضاءة",
        "logout": "تسجيل خروج",
        "Post": "نشر",
        "Create Post": "أنشئ منشورًا",
        "titulo": "طاسيلي",

        "Loading": "تحميل",

        "Register": "تسجيل",
        "V-Network": "تاسيلي",
        "Tassili": "تاسيلي",

        "Hide": "أخفاء",
        "Show": "إظهار",
        "Already have an account?": "هل لديك حساب?",
        "Login Now": "تسجيل الدخول الآن",
        "Loginn": "تسجيل الدخول",
        "You dont have an account?": "ليس لديك حساب؟",



        "editar perfile": "تغيير الملف الشخصي",
        "Close": "غلق",
        "Change": "تغير",
        "Full Name": "الاسم الكامل",
        "User Name": "اسم المستخدم",

        "Password": "كلمة المرور",
        "Confirm Password": "تأكيد كلمة المرور",
        "Email address": "البريد الإلكتروني",

        "Register Now": "سجل الآن",
        "Info": "يتم تشفير معلوماتك وتخزينها بشكل آمن ",

        "Mobile": "",
        "Address": "عنوان",
        "Websit": "موقع إلكتروني",
        "Story": "",


        "Other": "آخر",
        "Save": "حفظ",

        "Error": "خطأ",
        "Success": "بنجاح",


   
        "Please add your photo.": "من فضلك أضف صورتك",

      }
    },




  },


  fallbackLng: "fr",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;