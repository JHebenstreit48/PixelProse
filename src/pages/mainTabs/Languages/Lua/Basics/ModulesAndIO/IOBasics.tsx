import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
