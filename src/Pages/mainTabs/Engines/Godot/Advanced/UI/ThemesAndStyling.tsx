import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ThemesAndStyling = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/UI/ThemesAndStyling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Themes & Styling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThemesAndStyling;
