import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NaniteAndLumen = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Rendering/NaniteAndLumen';

  return (
    <>
      <PageLayout>
        <PageTitle title="Nanite & Lumen" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NaniteAndLumen;
