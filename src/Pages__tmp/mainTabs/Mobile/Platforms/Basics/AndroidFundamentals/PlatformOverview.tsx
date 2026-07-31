import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const PlatformOverview = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/AndroidFundamentals/PlatformOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Platform Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlatformOverview;
