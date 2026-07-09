import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AutomationTools = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Automation/AutomationTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="Automation Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutomationTools;
