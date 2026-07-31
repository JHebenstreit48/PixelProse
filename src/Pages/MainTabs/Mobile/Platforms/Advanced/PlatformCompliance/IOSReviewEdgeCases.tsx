import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const IOSReviewEdgeCases = () => {
  const markdownFilePath = 'Mobile/Platforms/Advanced/PlatformCompliance/IOSReviewEdgeCases';

  return (
    <>
      <PageLayout>
        <PageTitle title="iOS Review Edge Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IOSReviewEdgeCases;
