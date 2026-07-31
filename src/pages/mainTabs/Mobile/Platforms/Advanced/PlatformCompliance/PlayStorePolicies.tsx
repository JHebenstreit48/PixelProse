import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PlayStorePolicies = () => {
  const markdownFilePath = 'Mobile/Platforms/Advanced/PlatformCompliance/PlayStorePolicies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Play Store Policies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlayStorePolicies;
