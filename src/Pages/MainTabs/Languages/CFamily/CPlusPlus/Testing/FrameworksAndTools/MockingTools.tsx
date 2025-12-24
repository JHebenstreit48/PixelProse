import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MockingTools = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Testing/FrameworksAndTools/MockingTools';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Mocking Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MockingTools;
