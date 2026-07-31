import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
