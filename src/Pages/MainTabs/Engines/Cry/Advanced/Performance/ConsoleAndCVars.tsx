import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConsoleAndCVars = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Performance/ConsoleAndCVars';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Console & CVars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConsoleAndCVars;
