import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
