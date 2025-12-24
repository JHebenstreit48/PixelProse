import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Functions = () => {
  const markdownFilePath = 'Languages/CFamily/C/Basics/ProgramFlow/Functions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Functions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Functions;
