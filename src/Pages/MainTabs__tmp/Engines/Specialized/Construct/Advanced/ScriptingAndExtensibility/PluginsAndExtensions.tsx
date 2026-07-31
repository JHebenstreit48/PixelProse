import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const PluginsAndExtensions = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/ScriptingAndExtensibility/PluginsAndExtensions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Plugins & Extensions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PluginsAndExtensions;
