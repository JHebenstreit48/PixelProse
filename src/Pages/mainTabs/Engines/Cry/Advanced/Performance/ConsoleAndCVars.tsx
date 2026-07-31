import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ConsoleAndCVars = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Performance/ConsoleAndCVars';

  return (
    <>
      <PageLayout>
        <PageTitle title="Console & CVars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConsoleAndCVars;
