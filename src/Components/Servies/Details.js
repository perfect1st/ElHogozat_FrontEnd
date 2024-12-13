  import React, {useState} from 'react';
  import { useLocation , useNavigate } from 'react-router-dom';
  import styles from './Servies.module.css'; // Ensure you're using the correct stylesheet

  const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(0); 

    const { cardData } = location.state || {}; // Get card data from navigation state

    if (!cardData) {
      return <div>No card data available.</div>;
    }

    const data = 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.'
    const handleSelection = () => {
      setSelectedTab(1);
      navigate('/servies'); // Navigate to /agents
    };

    return (
  <div>
    <div className={styles.DetailsLabel} >{cardData.label}</div>
      <div className={styles.DetailsComponant}>
        <h1>التفاصيل</h1>
        <div className={styles.detailsContent}>
          <h2>{data}</h2>
          <div className={styles.priceContainer}>
            <span>السعر</span>
            <span>{cardData.price}</span>
          </div>
        </div>
      </div>
          <div className={styles.onSubmit} onClick={handleSelection} >اختيار</div>
  </div>
    );
  };

  export default Details;
