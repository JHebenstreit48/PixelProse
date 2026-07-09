import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AdsAndIAP = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/PublishAndMonetize/AdsAndIAP';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ads & IAP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AdsAndIAP;
