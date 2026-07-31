import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Tables = () => {
  const markdownFilePath = 'Languages/Lua/Basics/DataAndStructures/Tables';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tables;
