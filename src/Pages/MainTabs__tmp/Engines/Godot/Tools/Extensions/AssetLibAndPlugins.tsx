import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const AssetLibAndPlugins = () => {
  const markdownFilePath = 'Engines/Godot/Tools/Extensions/AssetLibAndPlugins';

  return (
    <>
      <PageLayout>
        <PageTitle title="AssetLib & Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssetLibAndPlugins;
