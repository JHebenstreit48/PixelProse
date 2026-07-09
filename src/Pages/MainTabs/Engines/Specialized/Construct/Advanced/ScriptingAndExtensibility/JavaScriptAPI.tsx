import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JavaScriptAPI = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/ScriptingAndExtensibility/JavaScriptAPI';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JavaScriptAPI;
