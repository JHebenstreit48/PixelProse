import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModulesAndRequire = () => {
  const markdownFilePath = 'Languages/Lua/Basics/ModulesAndIO/ModulesAndRequire';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Modules & require" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModulesAndRequire;
