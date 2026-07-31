import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ECSFriendlyData = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/StructuresAndPatterns/ECSFriendlyData';

  return (
    <>
      <PageLayout>
        <PageTitle title="ECS-Friendly Data" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ECSFriendlyData;
