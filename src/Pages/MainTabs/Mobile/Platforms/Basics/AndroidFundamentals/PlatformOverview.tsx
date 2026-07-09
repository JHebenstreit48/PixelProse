import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
