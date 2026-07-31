import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
