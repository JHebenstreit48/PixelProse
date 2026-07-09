import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IOBasics = () => {
  const markdownFilePath = 'Languages/Lua/Basics/ModulesAndIO/IOBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="IO Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IOBasics;
