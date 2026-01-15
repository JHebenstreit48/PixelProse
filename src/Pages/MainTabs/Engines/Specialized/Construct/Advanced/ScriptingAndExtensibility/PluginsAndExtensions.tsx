import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PluginsAndExtensions = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/ScriptingAndExtensibility/PluginsAndExtensions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Plugins & Extensions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PluginsAndExtensions;
