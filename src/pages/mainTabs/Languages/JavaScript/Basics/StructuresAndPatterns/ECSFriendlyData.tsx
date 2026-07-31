import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
