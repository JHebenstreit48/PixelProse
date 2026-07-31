import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ModulesAndRequire = () => {
  const markdownFilePath = 'Languages/Lua/Basics/ModulesAndIO/ModulesAndRequire';

  return (
    <>
      <PageLayout>
        <PageTitle title="Modules & require" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModulesAndRequire;
