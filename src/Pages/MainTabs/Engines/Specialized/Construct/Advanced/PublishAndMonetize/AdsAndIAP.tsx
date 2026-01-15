import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AdsAndIAP = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/PublishAndMonetize/AdsAndIAP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Ads & IAP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AdsAndIAP;
