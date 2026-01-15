import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ECSFriendlyData = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/StructuresAndPatterns/ECSFriendlyData';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ECS-Friendly Data" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ECSFriendlyData;
