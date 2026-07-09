import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
