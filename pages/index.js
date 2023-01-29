import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <div class="urbnups_moment">
          <div class="urbnups_moment_creator">
            <a href="https://urbnupsshare.app.link/?$canonical_identifier=spot/2KqC9G7dOdW485WA2rKR&amp;$og_image_url=https://ik.imagekit.io/urbnups/spots/Od3ZiC4kZLceYP15mM19bc1UZSr2_50d5fcd6-fe3d-2300-5c8c-dacc919c28d5.jpg?alt=media&amp;token=a71184f1-8f9a-4990-ad7b-7c188a7bef0e&amp;tr=w-600?tr=w-600,h-600&amp;$og_title=Ein%20wahres%20Meisterwerk&amp;contentDescription=Durch%20die%20Weender%20Stra%C3%9Fe%20gehen%20t%C3%A4glich%20Hunderte%20von%20Menschen%20%E2%80%93%20alle%20haben%20eins%20gemeinsam:%20sie%20passie">
              <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/urbnups.appspot.com/o/users%2Fmein_goettingen_5121baa9-b61e-a029-c83a-7d108bcd1606.jpg?alt=media&amp;token=f95ef878-b1cb-463d-b490-2db3d17b2b90&amp;tr=w-80" />
                <span> mein_goettingen</span>
              </div>
            </a>
          </div>
          <div class="urbnups_moment_image">
            <img src="https://ik.imagekit.io/urbnups/spots/3067E38D-5466-4F84-AD83-3AF5EA3140D8.jpg?alt=media&amp;token=1b9ad783-99f4-49ae-9e0f-b98b0305679d&amp;tr=w-600?tr=w-600,h-600" width='315px' />
          </div>
          <div class="urbnups_moment_favourite">
            <img src="https://urbnups.com/wp-content/uploads/2022/10/bucketlisticon.png" />
          </div>
          <div class="urbnups_moment_title">
            <span>Green Lantern?</span>
          </div>
          <div class="urbnups_moment_description">
            <span>Nein, wir sind hier nicht im Film Green Lantern, sondern hier werden geheime Nachrichten zwischen de… mehr</span>
          </div>
        </div>
      </main>
      <style>
        {`
        .urbnups_moment{
          width:315px;
          text-align: left;
          }
          .urbnups_moment_image img{
             width:315px;
             height:315px;
             border-radius: 8px 8px 8px 8px;
            }
            .urbnups_moment_creator {
                position:absolute;
                margin-left:10px;
                margin-top:10px;
         
                }
            .urbnups_moment_creator img{
            width: 30px;
            height: 30px;
            object-fit: cover;
            border-radius: 35px 35px 35px 35px;
            }
             .urbnups_moment_creator a{
            color:white;
            text-decoration:none;
            font-size:12px;
            font-weight:600;
         
         
            }
            .urbnups_moment_creator a div{
                    align-items: center;
                    display:flex
                }
                 .urbnups_moment_creator a div span{
                   padding-left:10px
                }
            .urbnups_moment_title
            {
               font-size:14px;
               font-weight:600;
         
         
            }
            .urbnups_moment_description
            {
               font-size:11px;
               font-weight:300;
            }
            .urbnups_moment_favourite
            {
                position:absolute;
                margin-left:265px;
                margin-top:-25px
         
                }
            .urbnups_moment_favourite img{
             width: 40px;
            height: 40px;
            object-fit: contain;
            }
            
        `}
      </style>
    </>
  )
}
