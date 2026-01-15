import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AutomationTools = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Automation/AutomationTools';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Automation Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutomationTools;
