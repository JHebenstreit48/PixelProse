import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DebuggingTools = () => {
  const markdownFilePath = 'Languages/Lua/Tools/DevTools/DebuggingTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Debugging Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebuggingTools;
