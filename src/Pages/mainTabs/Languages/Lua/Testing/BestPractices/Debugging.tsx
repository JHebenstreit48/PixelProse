import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Debugging = () => {
  const markdownFilePath = 'Languages/Lua/Testing/BestPractices/Debugging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Debugging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Debugging;
